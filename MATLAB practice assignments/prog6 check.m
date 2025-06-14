% Your name Yejun Song
% CSC 2262
% Spring 2023
% Program # 6

format compact
clear, clc

disp("Part 1")

f=@(x) x.^3 - x.^2.*exp(-0.5.*x) - 3.*x + 1;
left=-2;
right=3;
x=left:0.01:right;
fPlot=f(x);
lineofX=[left,right];
lineofY=[0,0];
plot(x,fPlot,'r',lineofX,lineofY,'k')
x1=fzero(f,-0.755);
x2=fzero(f,0.3);
x3=fzero(f,1.78);

fprintf('x1 = %.4f  x2 = %.4f  x3 = %.4f\n' , x1, x2, x3)

disp(" ")

%%

disp("Part 2")


f = @(theta) 5.*cos(theta)+sqrt(64-(5.*sin(theta)-2.25).^2)-9;
left = 0;
right = 350;
theta = left : .01 : right;
fPlot = f(theta);
lineX = [left, right];
lineY = [0, 0];
plot(theta,fPlot,'r',lineX,lineY,'k');
theta1 = rad2deg(fzero(f, 2));
theta2 = rad2deg(fzero(f, 4));

fprintf('theta1 = %.4f  theta2 = %.4f\n', theta1, theta2)

