f=open("D:/ProjectCollection/newFile.txt",'r',encoding='utf8')
lines = f.readlines()
for line in lines:
    print(line)
f.close()
