package com.example.demo.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import java.util.logging.Logger;
@Component
@Aspect
public class PlanAspect {
	public static Logger logger = Logger.getLogger(PlanAspect.class.getName());
	   public static final String logMsg = "LogMsg---------------------";
	   
	   @Around(value = "within(com.example.demo.*)")
	   public Object advice(ProceedingJoinPoint joinPoint)
	   {
	      Object obj=null;
	      
	      try 
	      {
	         logger.info(logMsg+joinPoint.getTarget().getClass().getName());
	         logger.info(logMsg+joinPoint.getSignature().getName());
	         
	         obj=joinPoint.proceed();
	         
	      } catch (Throwable e) 
	      {
	         e.printStackTrace();
	      }
	      
	      return obj;
	   }
	
}
