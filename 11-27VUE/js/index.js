const index = {
	template:'<div>index</div>'
}

const admin = {
	template:`<div>
		admin<br>
		  <router-link :to="{name:'classesa'}">admin-class</router-link>
		  <router-link :to="{name:'studenta'}">admin-student</router-link>
		  <router-link :to="{name:'teachera'}">admin-teacher</router-link>
		<router-view></router-view>
	</div>`,
	mounted(){
		console.log(this.$route.query)	//获取当前组建的信息
	}
}

const student = {
	template:'<div>student</div>'
}

const classes = {
	template:'<div>班级管理</div>'
}

const studenta = {
	template:'<div>学生管理</div>'
}

const teachera = {
	template:'<div>教师管理</div>'
}

