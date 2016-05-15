package camt.se331.shoppingcart.controller;

import camt.se331.shoppingcart.entity.transfer.TokenTransfer;
import camt.se331.shoppingcart.entity.transfer.UserTransfer;
import camt.se331.shoppingcart.service.util.TokenUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Bitee on 4/19/2016.
 */
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserAuthenticationController {
    @Autowired
    UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    /**
     * Retrieves the currently logged in user.
     *
     * @return A transfer containing the username and the roles
     */

    @RequestMapping(method = RequestMethod.GET)
    public UserTransfer getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object principal = authentication.getPrincipal();
        UserDetails userDetails = (UserDetails) principal;
        return new UserTransfer(userDetails.getUsername(),this.createRoleMap(userDetails));
    }
    private Map<String, Boolean> createRoleMap(UserDetails userDetails){
        Map<String,Boolean> roles = new HashMap<String, Boolean>();
        for(GrantedAuthority authority : userDetails.getAuthorities()){
            roles.put(authority.getAuthority(),Boolean.TRUE);
        }
        return roles;
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public TokenTransfer authenticate(@RequestBody String body){
        //The body has been send by username=a&password=b format
        String[] token = body.split("&");
        String username = token[0].split("=")[1];
        String password = token[1].split("=")[1];
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,password);
        Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext()
                .setAuthentication(authentication);
        /*
        *Reload user as password of authentication principal will be null after authorization and
        * password is needed for token generation
         */
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
        return new TokenTransfer(TokenUtils.createToken(userDetails));
    }
}
