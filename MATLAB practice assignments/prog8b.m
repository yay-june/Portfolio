
% Yejun Song
% CSC 2262
% Spring 2023
% Program # 8b

format compact
clear, clc

t=0:.001:70;
u0=[1000 300 600];
options=odeset('RelTol',1e-7,'AbsTol',1e-7);
[t, u]=ode45(@f2,t,u0,options);
plot(t,u(:,1),'b',t,u(:,2),'g',t,u(:,3),'r');
axis([0 70 0 1100]);
set(gca, 'xtick', 0:10:70);
set(gca, 'ytick', 0:100:1100);
xlabel('t');
ylabel('x(blue), y(green), z(red) Populations');
title('Program 8b');

function f=f2(t,uf)
A=.0012;
B=.011;
C=.0014;
D=.006;
E=.0004;
k=.45;
x=uf(1);
y=uf(2);
z=uf(3);
f=zeros(3,1);
f(1) = x - A*x^2 - A*k*x*y - B*x*z;
f(2) = y - C*k*x*y - A*y^2 - A*y*z;
f(3) = -z + D*x*z + E*y*z;
end