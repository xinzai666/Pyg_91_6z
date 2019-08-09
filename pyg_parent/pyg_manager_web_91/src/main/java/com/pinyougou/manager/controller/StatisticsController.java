package com.pinyougou.manager.controller;


import com.alibaba.dubbo.config.annotation.Reference;
import com.pinyougou.sellergoods.service.StatisticsService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/statistics")
public class StatisticsController {

    @Reference
    private StatisticsService statisticsService;


    @RequestMapping("/goodsNumSelect")
    public List<Map> goodsNumSelect(){
        return statisticsService.goodsNumSelect();
    }

    @RequestMapping("/itemSaleroomSelect")
    public List<Map> itemSaleroomSelect(){
        return statisticsService.itemSaleroomSelect();
    }
}
