f=open("D:/ProjectCollection/newFile.txt",'a',encoding='utf8')
for i in range(11,20):
    data = "%d번째 줄입니다.\n" % i
    f.write(data)
f.close()
