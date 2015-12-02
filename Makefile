
mocha := node_modules/".bin"/mocha

test:; $(mocha) -u tdd -R spec -t 5000 -c -S -b --inline-diffs

.PHONY: test
