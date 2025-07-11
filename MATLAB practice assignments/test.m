% Yejun Song
% CSC 2262
% Spring 2023
% Program 10

format compact
clear, clc

m1 = .4;
m2 = .9;
m3 = .7;
m4 = .8;
m5 = .6;
m6 = .5;
m7 = .3;
k1 = 3.9;
k2 = 5.2;
k3 = 4.2;
k4 = 4.7;
k5 = 5.3;
k6 = 4.9;
k7 = 4.4;
k8 = 5.4;

 
A = [-(k1 + k2)/m1         k2/m1              0             0             0               0              0
             k2/m2   -(k2+k3)/m2          k3/m2             0             0               0              0
                 0         k3/m3    -(k3+k4)/m3         k4/m3             0               0              0
                 0             0          k4/m4   -(k4+k5)/m4         k5/m4               0              0
                 0             0              0         k5/m5   -(k5+k6)/m5           k6/m5              0
                 0             0              0             0         k6/m6     -(k6+k7)/m6          k7/m6
                 0             0              0             0             0           k7/m7    -(k7+k8)/m7];
A = -A;

[eigvec eigval] = eig(A);
t = 0 : .001 : 16;
lineX = [0, 16];
lineY = [0, 0];
titles(1,:) = 'Program 10 Figure 1';
titles(2,:) = 'Program 10 Figure 2';
titles(3,:) = 'Program 10 Figure 3';
titles(4,:) = 'Program 10 Figure 4';
titles(5,:) = 'Program 10 Figure 5';
titles(6,:) = 'Program 10 Figure 6';
titles(7,:) = 'Program 10 Figure 7';

for k = 1 : 7
 w = sqrt(eigval(k,k));
 c1 = eigvec(1,k);
 c2 = eigvec(2,k);
 c3 = eigvec(3,k);
 c4 = eigvec(4,k);
 c5 = eigvec(5,k);
 c6 = eigvec(6,k);
 c7 = eigvec(7,k);
 x1 = c1*cos(w*t);
 x2 = c2*cos(w*t);
 x3 = c3*cos(w*t);
 x4 = c4*cos(w*t);
 x5 = c5*cos(w*t);
 x6 = c6*cos(w*t);
 x7 = c7*cos(w*t);
 figure(k);
 plot(t,x1,'b',t,x2,'r',t,x3,'g',t,x4,'k',t,x5,'c',t,x6,'y',t,x7,'m',lineX,lineY,'k');
 axis([0 16 -1 1]);
 set(gca,'xtick', 0 : 16);
 set(gca,'ytick', -1 : .2 : 1);
 xlabel('t');
 ylabel('x1(blue), x2(red), x3(green), x4(black), x5(cyan), x6(yellow), x7(magenta)');
 title(titles(k,:));
end