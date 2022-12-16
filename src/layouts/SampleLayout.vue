<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar
          class="mr-10 ml-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="menu in menus"
          :key="menu.code"
        >
          <router-link :to="{ path: '/' + menu.code }">{{ menu.title }}</router-link>
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            density="compact"
            hide-details
            variant="solo"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">

                <template
                  v-for="menu in subMenus"
                  :key="menu.code"
                >
                  <v-list-item>
                    <v-list-item-title>
                      <router-link :to="{ path: '/sample/' + menu.code }">{{ menu.title }}</router-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-divider class="my-2"></v-divider>
                </template>
                
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              style="padding: 10px;"
            >
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'SampleLayout',
  data: () => ({
      menus: [
        { code:'collection', title: '컴포넌트 모음'},
        { code:'exercise', title: '연습'},
        { code:'sample', title: '샘플'},
      ],
      subMenus: [
        { code:'crudJson', title: 'CRUD 기본(json)'},
        { code:'crudList', title: 'CRUD 목록'},
        { code:'crudPageList', title: 'CRUD 목록(페이징)'},
        { code:'crudJoinList', title: 'CRUD 목록(join)'},
        { code:'crudCreate', title: 'CRUD 등록/수정'},
        { code:'excelUpload', title: '엑셀업로드'},
        { code:'naverMap', title: '네이버지도'},
        { code:'attachFile', title: '파일첨부'},
      ]
    }),
}
</script>
