file = open("input.txt")
x = 0
elves = [0]
for line in file:
	line = line.strip()
	if line != "":
		elves[x] += int(line)
	else:
		elves.append(0)
		x+=1

elves.sort()
print(elves[len(elves) - 1])