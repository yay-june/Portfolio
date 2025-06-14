% Yejun Song
% CSC 2262
% Spring 2023
% Program # 4

format compact
clear clc

limit=30;

disp("Part 1");
disp("PythagoreanTriples =")
for i=1:1:limit 
    for j=i+1:1:limit
        for k=j+1:1:limit
            if i*i+j*j==k*k
                row=[i,j,k];
                disp(row);
            end
        end
    end
end
disp(" ");

%%
disp("part 2");
disp("Diff6Primes =");

for i =1:100
    a=i+6;
    if(isprime(i)~=0 && isprime(a)~=0 && i<100 && a<100)
        row=[i,a];
        disp(row);
    end
end

disp(" ");
%%
disp("part 3");
disp("PerfectNumbers =");

count = 0;
row=[];

for i=2:10000
    sum=1;
    for k=2:floor(i/2)
        if rem(i,k)==0
            sum=sum+k;
        end
    end
    if sum==i
        count=count+1;
        row=[row i];
    end
    if count==3
        break;
    end
end

disp(row)
