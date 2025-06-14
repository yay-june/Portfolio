% CSC 2262
% Spring 2023
% Program 9b
format compact
clear, clc

t = 0 : .001 : 6;
u0 = [.3, 0, .2, 0, .9, 0, .5, 0, .7, 0, .4, 0, .6 0,];
options = odeset('RelTol',1e-7,'AbsTol',1e-7);
[t, u] = ode45(@f2, t, u0, options);
lineX = [0, 6];
lineY = [0, 0];

figure(1)
plot(t,u(:,1),'c',t,u(:,3),'k',t,u(:,5),'m',t,u(:,7),'g',t,u(:,9),'b',t,u(:,11),'r',t,u(:,13),'y',lineX,lineY,'k');
axis([0 6 -1 1]);
set(gca,'xtick', 0 : 6);
set(gca,'ytick', -1 : .2 : 1);
xlabel('t');
ylabel('x1(c), x2(k), x3(m), x4(g), x5(b), x6(r), x7(y)');
title('Example 9b Figure 1');

figure(2)
plot(t,u(:,2),'c',t,u(:,4),'k',t,u(:,6),'m',t,u(:,8),'g',t,u(:,10),'b',t,u(:,12),'r',t,u(:,14),'y',lineX,lineY,'k');
axis([0 6 -2.8 2.4]);
set(gca,'xtick', 0 : 6);
set(gca,'ytick', -2.8: .4: 2.4);
xlabel('t');
ylabel('v1(c), v2(k), v3(m), v4(g), v5(b), v6(r), v7(y)');
title('Example 9b Figure 2');

% function f2
function expression = f2(t, uf)
m1 = .3;
m2 = .2;
m3 = .9;
m4 = .5;
m5 = .6;
m6 = .8;
m7 = .4;
k1 = 5.6;
k2 = 4.5;
k3 = 3.3;
k4 = 5.4;
k5 = 4.8;
k6 = 2.6;
k7 = 6.2;
k8 = 4.9;
x1 = uf(1);
v1 = uf(2);
x2 = uf(3);
v2 = uf(4);
x3 = uf(5);
v3 = uf(6);
x4 = uf(7);
v4 = uf(8);
x5 = uf(9);
v5 = uf(10);
x6 = uf(11);
v6 = uf(12);
x7 = uf(13);
v7 = uf(14);
expression = zeros(6,1);
expression(1) = v1;
expression(2) = 1/m1 * ( -k1*x1 + k2*(x2-x1) );
expression(3) = v2;
expression(4) = 1/m2 * ( -k2*(x2-x1) + k3*(x3-x2) );
expression(5) = v3;
expression(6) = 1/m3 * ( -k3*(x3-x2) + k4*(x4-x3) );
expression(7) = v4;
expression(8) = 1/m4 * ( -k4*(x4-x3) + k5*(x5-x4));
expression(9) = v5;
expression(10) = 1/m5 * ( -k5*(x5-x4) + k6*(x6-x5));
expression(11) = v6;
expression(12) = 1/m6 * ( -k6*(x6-x5) + k7*(x7-x6));
expression(13) = v7;
expression(14) = 1/m7 * ( -k7*(x7-x6) - k8*x7);
end