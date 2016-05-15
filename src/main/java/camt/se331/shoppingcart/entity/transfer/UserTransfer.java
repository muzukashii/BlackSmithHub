package camt.se331.shoppingcart.entity.transfer;

import java.util.Map;

/**
 * Created by Bitee on 4/19/2016.
 */
public class UserTransfer {
    private final String name;

    private final Map<String,Boolean> roles;

    public String getName() {
        return name;
    }

    public Map<String, Boolean> getRoles() {
        return roles;
    }

    public UserTransfer(String name, Map<String, Boolean> roles) {
        this.name = name;
        this.roles = roles;
    }
}
