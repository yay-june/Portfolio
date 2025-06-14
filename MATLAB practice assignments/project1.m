% Yejun Song
% CSC 2262
% Spring 2023
% Program # 1

format compact
clear clc

a = 23;
c = 16; 
b = 43; 

A = (b*b) + (c*c);
B = (a*a) + (c*c);
C = (a*a) + (b*b);
a = sqrt(A);
b = sqrt(B);
c = sqrt(C);

AngleABC = acosd( ( (a*a) + (c*c) - (b*b) ) / (2*c*a) );

p =((a+b+c)/2);
A = sqrt(p*(p-a)*(p-b)*(p-c));
disp("Part 1");
disp("AngleABC = " + AngleABC);
disp("A = " + A);
disp(" ");

%% 
a = 8;
h = 13;
L = sqrt( ((a*a) + (4*h*h)) ) + ((a*a) / (2*h) ) * log( ((2*h) / a) + sqrt( ((2*h/a)*(2*h/a)) + 1 )  );
disp("Part 2");
disp("L = " + L);
disp(" ");

%% 
r1 = 4.5;
r2 = 10.5;
r3 = 15; 
a = r1 + r2;
b = r1 + r3;
c = r2 + r3;
gamma = acosd( ((a*a) + (b*b) - (c*c)) / (2*a*b) );
disp("Part 3");
disp("Gamma = " + gamma);
beta = acosd( ((a*a) - (b*b) + (c*c)) / (2*a*c) );
disp("Beta = " + beta)
alpha = acosd( (-(a*a) + (b*b) + (c*c)) / (2*c*b) );
disp("Alpha = " + alpha);
disp("SumAng = " + (gamma+beta+alpha));