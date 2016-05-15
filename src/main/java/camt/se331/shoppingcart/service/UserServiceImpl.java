package camt.se331.shoppingcart.service;

import camt.se331.shoppingcart.entity.User;
import camt.se331.shoppingcart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Bitee on 4/19/2016.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> findAll(){
        return userRepository.findAll();
    }

    @Override
    public User findByUserName(String username){
        return userRepository.findByUsername(username);
    }
}
