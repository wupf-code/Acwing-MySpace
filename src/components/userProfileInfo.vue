<template>
  <div class="card">
      <div class="card-body">
        <div class="row">
            <div class="col-3">
          <img class="img-fluid" src="https://cdn.acwing.com/media/user/profile/photo/72081_lg_19c1f5045d.jpg" alt="">
        </div>
        <div class="col-9">
          <div class="username">{{ fullName }}</div>
          <div class="fans">粉丝数：{{ user.followerCount }}</div>
          <button @click="follow" v-if="!user.if_followed" type="button" class="btn btn-secondary btn-sm">+关注</button>
          <button @click="unfollow" v-if="user.if_followed" type="button" class="btn btn-secondary btn-sm">取消关注</button>

        </div>
      </div>
    </div>
  </div>


</template>

<script>
import {computed} from "vue";
export default {
  name: "userProfileInfo",
  props:{
    user:{
      type:Object,
      required:true,
    }
  },
  setup(props,context){
    let fullName=computed(()=>
      props.user.lastname+" "+props.user.firstname
    );
    const follow=()=>{
      context.emit("follow")
      console.log("follow")
    };
    const unfollow=()=>{
      context.emit("unfollow")
      console.log("unfollow")
    };

    return {
      fullName,
      follow,
      unfollow,
    }
  }


}
</script>

<style scoped>
img{
  border-radius: 50%;
}
.username{
font-weight: bold;
}
.fans{
font-size:12px;
  color:gray;
}
button{
  padding: 2px 4px;
  font-size:12px;
}

</style>