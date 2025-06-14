% Yejun Song
% CSC 2262
% Spring 2023
% Program 9a 
format compact
clear, clc

t = 0 : .001 : 16;
u0 = [.5, 0];
options = odeset('RelTol',1e-7,'AbsTol',1e-7);
[t, u] = ode45(@f2, t, u0, options);
lineX = [0, 20];
lineY = [0, 0];

% NOTE: When a program plots more than one graph, each graph has
% to have a different figure number. Put figure(1) right before
% the first plot statement and figure(2) right before the second
% plot statement, as shown below.
figure(1)
plot(t,u(:,1),'b',lineX,lineY,'k');
axis([0 16 -.5 .6]);
set(gca,'xtick', 0 : 2 : 16 );
set(gca,'ytick', -.5 : .1 : .6 );
xlabel('t');
ylabel('x');
title('Example 9a Figure 1');

figure(2);
plot(t,u(:,2),'r',lineX,lineY,'k');
axis([0 16 -3 3]);
set(gca,'xtick', 0 : 2 : 16 );
set(gca,'ytick', -3 : 3 );
xlabel('t');
ylabel('v');
title('Example 9a Figure 2');

% function f2
function expression = f2(t, uf)
m = .3;
c = .2;
k = 12.4;
x = uf(1);
v = uf(2);
expression = zeros(2,1);
expression(1) = v;
expression(2) = 1/m * (-c*v - k*x );
end