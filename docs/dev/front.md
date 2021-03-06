# Gemini-Next
```
|-- gemini-next
    |-- .gitignore
    |-- README.md
    |-- index.html
    |-- package.json
    |-- tsconfig.json
    |-- vite.config.ts
    |-- yarn.lock
    |-- img
    |   |-- audit.png
    |   |-- dash.png
    |   |-- login.png
    |   |-- logo.jpeg
    |   |-- query.png
    |   |-- record.png
    |-- public
    |   |-- favicon.ico
    |   |-- icon.png
    |-- src
        |-- App.vue
        |-- global.d.ts
        |-- main.ts
        |-- router.ts
        |-- shims-vue.d.ts
        |-- vite-env.d.ts
        |-- apis
        |   |-- autotask.ts
        |   |-- board.ts
        |   |-- dash.ts
        |   |-- db.ts
        |   |-- fetchSchema.ts
        |   |-- flow.ts
        |   |-- homeApis.ts
        |   |-- listAppApis.ts
        |   |-- loginApi.ts
        |   |-- orderPostApis.ts
        |   |-- policy.ts
        |   |-- query.ts
        |   |-- record.ts
        |   |-- rules.ts
        |   |-- setting.ts
        |   |-- user.ts
        |-- assets
        |   |-- comment
        |   |   |-- 1.svg
        |   |   |-- 2.svg
        |   |   |-- 3.svg
        |   |   |-- comment.svg
        |   |   |-- rockets.svg
        |   |-- login
        |       |-- 1.mp4
        |       |-- logo.png
        |-- components # 组件库
        |   |-- chartCard
        |   |   |-- chart.less
        |   |   |-- chartCard.vue
        |   |   |-- miniArea.vue
        |   |   |-- miniBar.vue
        |   |   |-- miniCol.vue
        |   |-- editor
        |   |   |-- editor.vue
        |   |   |-- impl.ts
        |   |   |-- keyword.ts
        |   |   |-- work.ts
        |   |-- listApp
        |   |   |-- listApp.vue
        |   |   |-- queryApp.vue
        |   |   |-- queryBanner.vue
        |   |   |-- queryOrder.vue
        |   |-- menu
        |   |   |-- menu.vue
        |   |-- orderProfile
        |   |   |-- comment.vue
        |   |   |-- orderProfile.vue
        |   |   |-- osc.vue
        |   |   |-- rejectModal.vue
        |   |   |-- results.vue
        |   |-- pageHeader
        |   |   |-- pageHeader.vue
        |   |-- queryProfile
        |   |   |-- queryProfile.vue
        |   |-- steps
        |   |   |-- steps.vue
        |   |-- table
        |   |   |-- index.ts
        |   |   |-- orderTable.vue
        |   |   |-- orderTableSearch.vue
        |   |   |-- stateTags.vue
        |   |   |-- table.vue
        |   |-- user
        |       |-- changePassword.vue
        |       |-- registerForm.vue
        |       |-- userRules.vue
        |-- config # 通用配置
        |   |-- request.ts
        |   |-- vars.ts
        |-- lang # i18n相关
        |   |-- en-us.ts
        |   |-- index.ts
        |   |-- zh-cn.ts
        |   |-- en-us
        |   |   |-- autoTask
        |   |   |   |-- index.ts
        |   |   |-- common
        |   |   |   |-- index.ts
        |   |   |-- menu
        |   |   |   |-- index.ts
        |   |   |-- order
        |   |   |   |-- index.ts
        |   |   |-- query
        |   |   |   |-- index.ts
        |   |   |-- record
        |   |   |   |-- index.ts
        |   |   |-- setting
        |   |   |   |-- index.ts
        |   |   |-- user
        |   |       |-- index.ts
        |   |-- zh-cn
        |       |-- autoTask
        |       |   |-- index.ts
        |       |-- common
        |       |   |-- index.ts
        |       |-- menu
        |       |   |-- index.ts
        |       |-- order
        |       |   |-- index.ts
        |       |-- query
        |       |   |-- index.ts
        |       |-- record
        |       |   |-- index.ts
        |       |-- setting
        |       |   |-- index.ts
        |       |-- user
        |           |-- index.ts
        |-- lib
        |   |-- index.ts
        |-- mixins 
        |   |-- common.ts
        |   |-- db.ts
        |   |-- fetch.ts
        |   |-- juno.ts
        |-- socket
        |   |-- index.ts
        |-- store
        |   |-- index.ts
        |   |-- types.ts
        |   |-- module
        |       |-- common.ts
        |       |-- highlight.ts
        |       |-- menu.ts
        |       |-- order.ts
        |       |-- user.ts
        |-- style
        |   |-- theme.less
        |-- types
        |   |-- index.ts
        |-- views # 页面
            |-- apply
            |   |-- apply.vue
            |   |-- order.vue
            |-- common
            |   |-- announce.vue
            |   |-- auditLayout.vue
            |   |-- sponsor.vue
            |   |-- subLayout.vue
            |-- home
            |   |-- home.vue
            |   |-- profile.vue
            |-- layout
            |   |-- layout.vue
            |-- login
            |   |-- login-form.vue
            |   |-- login.vue
            |-- manager
            |   |-- autotask
            |   |   |-- autotask.vue
            |   |   |-- autotaskModal.vue
            |   |   |-- autotaskTable.vue
            |   |-- board
            |   |   |-- board.vue
            |   |-- db
            |   |   |-- db.vue
            |   |   |-- dbForm.vue
            |   |   |-- dbModal.vue
            |   |   |-- dbTable.vue
            |   |   |-- dbTableSearch.vue
            |   |-- flow
            |   |   |-- flow.vue
            |   |   |-- flowModal.vue
            |   |   |-- flowTable.vue
            |   |-- policy
            |   |   |-- policy.vue
            |   |   |-- policyModal.vue
            |   |   |-- policyTable.vue
            |   |-- rules
            |   |   |-- rules.ts
            |   |   |-- rules.vue
            |   |-- setting
            |   |   |-- setting.vue
            |   |-- user
            |       |-- user.vue
            |       |-- userTable.vue
            |       |-- userTableSearch.vue
            |-- query
            |   |-- clip.vue
            |   |-- clipBoard.vue
            |   |-- history.vue
            |   |-- input.vue
            |   |-- modal.vue
            |   |-- query.vue
            |   |-- table.vue
            |   |-- tree.vue
            |-- record
            |   |-- order.vue
            |   |-- query.vue
            |   |-- record.vue
            |   |-- libs
            |       |-- tips.vue
            |-- server
                |-- order
                |   |-- list.vue
                |-- query
                    |-- list.vue
                    |-- querySearch.vue
```