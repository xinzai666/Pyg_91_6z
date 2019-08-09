package com.pinyougou.sellergoods.service.impl;

import com.alibaba.dubbo.config.annotation.Service;
import com.pinyougou.mapper.TbGoodsMapper;
import com.pinyougou.sellergoods.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;


@Service
public class StatisticsServiceImpl implements StatisticsService {

    @Autowired
    private TbGoodsMapper goodsMapper;

    @Override
    public List<Map> goodsNumSelect() {
        return goodsMapper.goodsNumSelect();
    }

    @Override
    public List<Map> itemSaleroomSelect() {
        return goodsMapper.itemSaleroomSelect();
    }
}
