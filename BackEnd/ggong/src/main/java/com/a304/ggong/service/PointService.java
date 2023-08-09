package com.a304.ggong.service;

import com.a304.ggong.dto.response.PointListResponse;

import java.util.List;

public interface PointService {
    //포인트 내역 조회(기간에 따른 조회, 잔여포인트)
    List<PointListResponse> selectPointListByUserEmail(String userEmail);

    //잔여포인트 계산
    int calculateBalancePoint(String theDate);

    List<PointListResponse> selectPointListByEventTime(String startDate, String endDate);



}