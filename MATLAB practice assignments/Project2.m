% Yejun Song
% CSC 2262
% Spring 2023
% Program # 2

format compact
clear clc

format bank
n=30;
X=[0,5,10,15,20,25,30];
L=100000;
part=(1+(0.06/12))^(12*n);
part1=(1+(0.06/12)).^(12.*X);
B=(L*(part-part1))/(part-1);
Table = [X;B];

disp("Part 1");
disp("Table =");
disp(Table);
disp(" ");


%%
format short
x=[0.5, 1, 1.5, 2, 2.5];
y=[0.8, 1.6, 2.4, 3.2, 4.0];
a=x.^2+2.*x.*y;
b=x.*y.*exp(y./x)-(x.^4.*y.^3+8.5).^(1/3);

disp("Part 2");
disp("(a)");
disp("z ="); disp(a);
disp("(b)");
disp("z ="); disp(b);
disp(" ");

%%
r=1.6e3;
s=14.2;
t=[1, 2, 3, 4, 5];
x=[2, 4, 6, 8, 10];
y=[3, 6, 9, 12, 15];

G=x.*t+(r/s^2)*(y.^2-x).*t;
R=(r*(-x.*t+y.*t.^2))/15-s^2*(y-0.5.*x.^2).*t;

disp("Part 3");
disp("(a)");
disp("G =");
disp(G);
disp("(b)");
disp("R =");
disp(R);




