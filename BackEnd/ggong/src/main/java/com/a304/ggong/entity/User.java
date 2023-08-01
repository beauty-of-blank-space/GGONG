package com.a304.ggong.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_no")
    private Long userNo;

    @Column(name = "nickname")
    private String name;

    @Column(name = "age_range")
    private String ageRange;

    @Column(name = "gender")
    private String gender;

    @Column(name = "email")
    private String email;

    @Column(name = "favorite_cigarette")
    private String favoriteCigarette;

    @Column(name = "QR")
    private String QR;

    @Column(name = "user_rating")
    private String userRating;



}
