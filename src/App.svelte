<script>
	import {firestore} from './firebase';

	let count = 0;
	const doc = firestore.doc('counters/vB1tQB5UXJtWHYuiFMHe');
	doc.onSnapshot((snapshot) => {
		count = snapshot.data().count;
	});

	function handleClick() {
		count += 1;
		return doc.update({count});
	}
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
