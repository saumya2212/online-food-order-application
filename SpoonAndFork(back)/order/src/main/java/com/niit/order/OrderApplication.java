package com.niit.order;

import com.niit.order.filter.OrderFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
@EnableEurekaClient
public class OrderApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean<OrderFilter> orderFilter() {
		FilterRegistrationBean<OrderFilter> bean = new FilterRegistrationBean<>(new OrderFilter());
		bean.addUrlPatterns("/api/v1/order/insertOrder",
				            "/api/v1/order/placeOrder/*",
				            "/api/v1/order/cancelOrder/*",
				            "/api/v1/order/removeItem/*",
				            "/api/v1/order/addItem/*");
		bean.setOrder(Ordered.LOWEST_PRECEDENCE);
		return bean;
	}
}
