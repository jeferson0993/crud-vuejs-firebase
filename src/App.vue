<template>
  <div id="app">
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-pcourse="fullPcourse"
      :color="color"
      :width="150"
      :height="128"
    ></loading>
    <!--Main Navigation-->
    <header>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark black scrolling-navbar">
        <a class="navbar-brand" href="https://nirab.dev" target="_blank">
          <img id="logo" src="https://miro.medium.com/max/400/1*wqYF-8Dmh7LhtLkKfERc3Q.png" alt="logo"/>
          <strong>CRUD Vue.JS Firebase - Jeferson</strong>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav nav-flex-icons">
            <li class="nav-item">
              <a href="https://jeferson0993.github.io/" class="nav-link" target="_blank">
                <i class="fas fa-globe"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href="https://github.com/jeferson0993" class="nav-link" target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!--Main Navigation-->

    <section>
      <div class="container">
        <div class="card">
          <div class="card card-body">
            <div style="margin-left:-5px;" class="row">
              <button
                type="button"
                class="btn btn-success"
                data-toggle="modal"
                data-target="#basicExampleModal"
                @click="model"
              >Cadastrar Estudante</button>
            </div>
            <table class="table">
              <thead class="black white-text">
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Curso</th>
                  <th scope="col">Semestre</th>
                  <th scope="col">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user['.key']">
                  <th scope="row">{{ user.name }}</th>
                  <td>{{ user.course }}</td>
                  <td>{{ user.sem }}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-info btn-sm"
                      data-toggle="modal"
                      data-target="#baseEditModal"
                      @click="editForm(user)"
                    >Editar</button>
                    <button @click="remove(user)" type="button" class="btn btn-danger btn-sm">Excluir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Create Modal -->
    <div
      class="modal fade"
      id="basicExampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">Entre com os dados do estudante</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3">
            <span class="badge badge-danger" role="alert">{{ this.error }}</span>
            <span class="badge badge-success" role="alert">{{ this.success }}</span>
            <br />
            <div class="mb-5">
              <label for="name">Nome</label>
              <input type="text" id="name" class="form-control" v-model="name" />
            </div>

            <div class="mb-5">
              <label for="course">Curso</label>
              <input type="text" id="course" class="form-control" v-model="course" />
            </div>

            <div class="mb-5">
              <label for="name">Semestre</label>
              <input type="text" id="sem" class="form-control" v-model="sem" />
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button @click="register()" class="btn btn-default">Cadastrar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Modal -->
    <div
      class="modal fade"
      id="baseEditModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">atualizar o(a) {{ user.name }}</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mx-3">
            <span class="badge badge-danger" role="alert">{{ this.error }}</span>
            <span class="badge badge-success" role="alert">{{ this.success }}</span>
            <br />
            <div class="mb-5">
              <label for="name">Nome</label>
              <input type="text" id="name" class="form-control" v-model="name" />
            </div>

            <div class="mb-5">
              <label for="course">Curso</label>
              <input type="text" id="course" class="form-control" v-model="course" />
            </div>

            <div class="mb-5">
              <label for="name">Semestre</label>
              <input type="text" id="sem" class="form-control" v-model="sem" />
            </div>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button @click="update()" class="btn btn-default">atualizar</button>
          </div>
        </div>
      </div>
    </div>

     <!-- Delete Modal -->
    <div
      class="modal fade"
      id="baseDeleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title w-100 font-weight-bold">excluir o(a) {{ user.name }}</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button @click="remove(user)" class="btn btn-danger">excluir</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { db } from "./firebase-config";

var usersRef = db.ref("crud-vuejs");
export default {
  name: "app",
  data() {
    return {
      users: [],
      name: "",
      course: "",
      sem: "",
      error: "",
      success: "",
      user: "",
      isLoading: true,
      fullPcourse: true,
      color: "#e91e63"
    };
  },
  firebase: {
    users: {
      source: usersRef
    }
  },
  components: {
    Loading
  },
  methods: {
    editForm(user) {
      this.name = user["name"];
      this.course = user["course"];
      this.sem = user["sem"];
      (this.user = user), (this.error = ""), (this.success = "");
    },
    update() {
      if (this.name == "") {
        this.error = "Digite o nome";
        return;
      }
      if (this.course == "") {
        this.error = "Digite o curso";
        return;
      }
      if (this.sem == "") {
        this.error = "Digite o semestre";
        return;
      }
      usersRef.child(this.user[".key"]).update({
        name: this.name,
        course: this.course,
        sem: this.sem
      });
      this.success = "Estudante atualizado(a)!";
    },
    remove(user) {
        usersRef.child(user[".key"]).remove();
    },
    register() {
      if (this.name == "") {
        this.error = "Digite o nome";
        return;
      }
      if (this.course == "") {
        this.error = "Digite o curso";
        return;
      }
      if (this.sem == "") {
        this.error = "Digite o semestre";
        return;
      }
      usersRef.push({
        name: this.name,
        course: this.course,
        sem: this.sem
      });
      (this.name = ""),
      (this.course = ""),
      (this.sem = ""),
      (this.success = "Estudante Cadastrado(a)!");
    },
    model() {
      this.success = "";
    }
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }
};
</script>

<style>
</style>
