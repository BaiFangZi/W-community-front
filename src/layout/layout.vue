<template>
	<div style="height: 100%;">
		<w-header></w-header>
		<w-mian></w-mian>
		<w-footer></w-footer>
	</div>
</template>

<script>
import Header from '@/layout/header.vue';
import Footer from '@/layout/footer.vue';
import Main from '@/layout/main.vue';
export default {
	name: 'layout',
	components: {
		'w-header': Header,
		'w-footer': Footer,
		'w-mian': Main
	}
};
</script>
