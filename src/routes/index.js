import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/collection',
  },
  {
    path: '/collection',
    name: 'collection',
    component: () => import('@/layouts/CollectionLayout'),
    children: [
      {
        path: '',
        name: 'vue',
        component: () => import('@/views/collection/CollectionVue')
      },
      {
        path: 'bootstrap',
        name: 'collectionBootstrap',
        component: () => import('@/views/collection/CollectionBootstrap')
      },
      {
        path: 'components',
        name: 'collectionComponents',
        component: () => import('@/views/collection/CollectionComponents')
      },
    ]
  },
  {
    path: '/exercise',
    name: 'exercise',
    component: () => import('@/layouts/ExerciseLayout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/exercise/ExerciseHome')
      },
      {
        path: 'dialogs',
        name: 'ExerciseDialogs',
        component: () => import('@/views/exercise/ExerciseDialogs')
      },
      {
        path: 'datepicker',
        name: 'ExerciseDatepicker',
        component: () => import('@/views/exercise/ExerciseDatepicker')
      },
      {
        path: 'tables',
        name: 'ExerciseTables',
        component: () => import('@/views/exercise/ExerciseTables')
      },
      {
        path: 'comboBox',
        name: 'ExerciseComboBox',
        component: () => import('@/views/exercise/ExerciseComboBox')
      },
    ]
  },
  {
    path: '/sample',
    name: 'sample',
    component: () => import('@/layouts/SampleLayout'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/sample/SampleHome')
      },
      {
        path: 'crudJson',
        name: 'SampleCrudJson',
        component: () => import('@/views/sample/SampleCrudJson')
      },
      {
        path: 'crudList',
        name: 'SampleCrudList',
        component: () => import('@/views/sample/SampleCrudList')
      },
      {
        path: 'crudPageList',
        name: 'SampleCrudPageList',
        component: () => import('@/views/sample/SampleCrudPageList')
      },
      {
        path: 'crudJoinList',
        name: 'SampleCrudJoinList',
        component: () => import('@/views/sample/SampleCrudJoinList')
      },
      {
        path: 'crudCreate',
        name: 'SampleCrudCreate',
        component: () => import('@/views/sample/SampleCrudCreate')
      },
      {
        path: 'excelUpload',
        name: 'SampleExcelUpload',
        component: () => import('@/views/sample/SampleExcelUpload')
      },
      {
        path: 'naverMap',
        name: 'SampleNaverMap',
        component: () => import('@/views/sample/SampleNaverMap')
      },
      {
        path: 'attachFile',
        name: 'SampleAttachFile',
        component: () => import('@/views/sample/SampleAttachFile')
      },
    ]
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});