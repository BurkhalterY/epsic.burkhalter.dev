<script setup>
import ShowCode from "@/components/ShowCode.vue"
</script>

<template>
  <div>
    <p>Une petite liste des symboles Nassi-Shneidermann.</p>
    <table class="mx-auto">
      <thead>
        <tr>
          <th>Symbole</th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img
              src="/java/medias/nassi-main.png"
              alt="main"
              class="min-w-max"
            />
          </td>
          <td>
            <ShowCode file="/java/code/nassi-main.java" lang="java" />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="/java/medias/nassi-instruction.png"
              alt="instruction"
              class="min-w-max"
            />
          </td>
          <td>
            <ShowCode file="/java/code/nassi-instruction.java" lang="java" />
          </td>
        </tr>
        <tr>
          <td>
            <img src="/java/medias/nassi-if.png" alt="if" class="min-w-max" />
          </td>
          <td>
            <ShowCode file="/java/code/nassi-if.java" lang="java" />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="/java/medias/nassi-switch.png"
              alt="if"
              class="min-w-max"
            />
          </td>
          <td>
            <ShowCode file="/java/code/nassi-switch.java" lang="java" />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="/java/medias/nassi-while.png"
              alt="while"
              class="min-w-max"
            />
          </td>
          <td>
            <ShowCode file="/java/code/nassi-while.java" lang="java" />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="/java/medias/nassi-do-while.png"
              alt="dpo while"
              class="min-w-max"
            />
          </td>
          <td>
            <ShowCode file="/java/code/nassi-do-while.java" lang="java" />
          </td>
        </tr>
        <tr>
          <td>
            <img src="/java/medias/nassi-for.png" alt="for" class="min-w-max" />
          </td>
          <td>
            <ShowCode file="/java/code/nassi-for.java" lang="java" />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="/java/medias/nassi-methode-appel.png"
              alt="for"
              class="min-w-max"
            />
          </td>
          <td>
            <ShowCode file="/java/code/nassi-methode-appel.java" lang="java" />
          </td>
        </tr>
        <tr>
          <td>
            <img
              src="/java/medias/nassi-methode-declaration.png"
              alt="for"
              class="min-w-max"
            />
          </td>
          <td>
            <ShowCode
              file="/java/code/nassi-methode-declaration.java"
              lang="java"
            />
            <p>Attention : ce code s'écrit en dehors de la fonction main()</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
