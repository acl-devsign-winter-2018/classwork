const count = 10000000;

const arr = [];

for ( var i = 0; i < count; i++ ) {
	arr[i] = `hello ${i}`;
}

function hasDups( arr ) {
	const dict = {};
	let n;
	for(var i = 0; i < arr.length; i++) {
		n = arr[i];
		if(dict[n]) return true;
		else dict[n] = true;
	};
	return false;
}
console.log( 'count', count );
console.time( 'has dups' );
console.log( hasDups( arr ) );
console.timeEnd( 'has dups' );