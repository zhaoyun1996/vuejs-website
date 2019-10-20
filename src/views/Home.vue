<template>
  <div id="home">
    <div class="wellcome">
      Wellcome, Kiệt
    </div>
    <vs-divider/>
    <vs-table stripe  max-items="10" pagination :data="users">
      <template slot="thead">
        <vs-th>
          STT
        </vs-th>
        <vs-th>
          ENG
        </vs-th>
        <vs-th>
          VN
        </vs-th>
        <vs-th>
          Status
        </vs-th>
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vs-td>
          
          <vs-td :data="data[indextr].email">
            {{data[indextr].eng}}
          </vs-td>

          <vs-td :data="data[indextr].username">
            {{data[indextr].vn}}
          </vs-td>

          <vs-td :data="data[indextr].status">
            {{data[indextr].status}}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  name: "home",
  data:()=>({
    users:[
      {
        "id": 1,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      },
      {
        "id": 2,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      },
      {
        "id": 3,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      },
      {
        "id": 4,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      },
      {
        "id": 5,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      },
      {
        "id": 6,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      },
      {
        "id": 7,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      },
      {
        "id": 8,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      },
      {
        "id": 9,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      },
      {
        "id": 10,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      },
      {
        "id": 11,
        "eng": "Executive",
        "vn": "(n) Chuyên viên",
        "status": "Chưa thuộc"
      }
    ]
  })
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 40px;
  padding: 10px;
}
.vs-con-table /deep/ table {
  font-size: 13px;
}
</style>
