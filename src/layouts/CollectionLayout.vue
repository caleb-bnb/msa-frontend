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
                      <router-link :to="{ path: '/collection/' + menu.code }">{{ menu.title }}</router-link>
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
  name: 'CollectionLayout',
  data: () => ({
      menus: [
        { code:'collection', title: '컴포넌트 모음'},
        { code:'exercise', title: '연습'},
        { code:'sample', title: '샘플'},
      ],
      subMenus: [
        { code:'', title: 'Vue'},
        { code:'bootstrap', title: '부트스트랩'},
        { code:'components', title: 'UI 컴포넌트(추후)'},
      ]
    }),
}
</script>
