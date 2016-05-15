package camt.se331.shoppingcart.controller;

import camt.se331.shoppingcart.entity.Product;
import camt.se331.shoppingcart.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import camt.se331.shoppingcart.entity.Location;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Bitee on 4/30/2016.
 */
@RestController
@RequestMapping("/")
@CrossOrigin
public class LocationController {
    @Autowired
    LocationService locationService;
    String Locate;

    @RequestMapping(value = "mylocation", method = RequestMethod.GET)
    public String test(@RequestParam("UserLocate") String Location) {
        locationService.addLocation(Location);
        System.out.println("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        System.out.println(Location);
        return Location;
    }

    @RequestMapping(value = "getLocation", method = RequestMethod.GET)
    public ArrayList<String> getLocation() {
        return locationService.getLocationList();
    }
}
