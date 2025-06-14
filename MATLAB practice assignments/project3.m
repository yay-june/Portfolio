% Yejun Song
% CSC 2262
% Spring 2023
% Program # 3

format compact
clear clc

alpha = 44 * pi/180;
beta = 69 * pi/180;
gamma=48*pi/180;
delta=76*pi/180;

w=330;
g=410;
h=260;

A=[
cos(alpha)     0               0                  0           0   1   0   1   0   0
sin(alpha)     0               0                  0           0   0   0   0   1   0
0             -cos(beta)       cos(gamma)         0           0  -1   1   0   0   0
0              sin(beta)       sin(gamma)         0           0   0   0   0   0   0
0              0               0                 -cos(delta)  0   0  -1   0   0   0
0              0               0                  sin(delta)  0   0   0   0   0   1
-cos(alpha)    cos(beta)       0                  0           1   0   0   0   0   0
-sin(alpha)   -sin(beta)       0                  0           0   0   0   0   0   0 
0              0              -cos(gamma)         cos(delta) -1   0   0   0   0   0
0              0              -sin(gamma)        -sin(delta)  0   0   0   0   0   0 
];

B=[0
   0
   0
   w
   0
   0
   0
   g
   h
   0];

F = A\B

