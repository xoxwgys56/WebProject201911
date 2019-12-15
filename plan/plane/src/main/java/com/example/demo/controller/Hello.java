package com.example.demo.controller;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.member.dto.Test;
import com.example.demo.member.service.TestService;

@Controller
public class Hello {
	@Autowired
    TestService testService;
    
	@RequestMapping("/jsp")
    public String jsp() throws Exception {
        return "main";
    }
	
	@RequestMapping(value = "/aaa", method=RequestMethod.POST)
    public void m(@RequestBody Map<String, Object> map) {
		Map map2 = (Map)map.get("student");
		int age = (int)map2.get("age");
		String pwd = (String)map2.get("name");
		
		int a = (int)map2.get("a");
		System.out.println(pwd+"\t"+age+"\t"+a);
		
		
    	
    }
    
    @RequestMapping(value = "/query", method=RequestMethod.GET)
    public @ResponseBody List<Test> query() throws Exception{
    	return testService.getAll();
    }

}