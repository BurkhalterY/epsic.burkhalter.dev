<script>
export default {
  data() {
    return {
      nbIPstr: "",
      nbSRstr: "",
      nbIP: 0,
      nbSR: 0,
      n_IP: 0,
      n_SR: 0,
      n_R: 0,
      classe: "",
      NET_ID: 0,
      MASK: 0,
      SR: new Array(),
      step1o_ip: "",
      step1o_sr: "",
      step2o_ip: "",
      step2o_sr: "",
      step3o_classe: "",
      step3o_net_id: "",
      step3bo: "",
      step4o: "",
      step5o: "",
      step6o: new Array(),
    }
  },
  methods: {
    calculate() {
      this.nbIP = parseInt(this.nbIPstr)
      this.nbSR = parseInt(this.nbSRstr)

      if (this.nbIP > 0 && this.nbSR > 0) {
        this.step1()
        this.step2()
        this.step3()
        this.step3b()
        this.step4()
        this.step5()
        this.step6()
      } else {
        this.step1o_ip = ""
        this.step1o_sr = ""
        this.step2o_ip = ""
        this.step2o_sr = ""
        this.step3o_classe = ""
        this.step3o_net_id = ""
        this.step3bo = ""
        this.step4o = ""
        this.step5o = ""
        this.step6o = []
      }
    },
    step1() {
      this.step1o_ip = this.nbIP.toString()
      this.nbIP++
      this.step1o_ip += " + 1 (passerelle) = " + this.nbIP
      this.step1o_ip += "<br>" + this.nbIP
      this.nbIP += Math.ceil(this.nbIP / 10)
      this.step1o_ip += " + 10% = " + this.nbIP

      this.step1o_sr = this.nbSR.toString()
      this.nbSR += Math.ceil(this.nbSR / 10)
      this.step1o_sr += " + 10% = " + this.nbSR
    },
    step2() {
      this.n_IP = this.ln(this.nbIP + 2) / this.ln(2)
      this.step2o_ip =
        "n = ln(" + this.nbIP + " + 2) / ln(2) = ~" + this.n_IP.toFixed(4)
      this.n_IP = Math.ceil(this.n_IP)
      this.step2o_ip += " → " + this.n_IP

      this.n_SR = this.ln(this.nbSR + 2) / this.ln(2)
      this.step2o_sr =
        "n = ln(" + this.nbSR + " + 2) / ln(2) = ~" + this.n_SR.toFixed(4)
      this.n_SR = Math.ceil(this.n_SR)
      this.step2o_sr += " → " + this.n_SR
    },
    step3() {
      if (this.n_IP + this.n_SR <= 8) {
        this.classe = "C"
        this.NET_ID = this.ipToNumber([192, 168, 1, 0])
        this.n_R = 24
        this.step3o_classe = this.n_IP + " + " + this.n_SR + " ≤ 8 → Classe C"
      } else if (this.n_IP + this.n_SR <= 16) {
        this.classe = "B"
        this.NET_ID = this.ipToNumber([172, 16, 0, 0])
        this.n_R = 16
        this.step3o_classe = this.n_IP + " + " + this.n_SR + " ≤ 16 → Classe B"
      } else if (this.n_IP + this.n_SR <= 24) {
        this.classe = "A"
        this.NET_ID = this.ipToNumber([10, 0, 0, 0])
        this.n_R = 8
        this.step3o_classe = this.n_IP + " + " + this.n_SR + " ≤ 24 → Classe A"
      }
      this.step3o_net_id =
        "NET_ID : " + this.showIP(this.numberToIp(this.NET_ID))
    },
    step3b() {
      let n_IP = this.n_IP
      let n_SR = this.n_SR
      if (this.n_IP + this.n_SR <= 8) {
        this.n_IP += 8 - this.n_IP - this.n_SR
      } else if (this.n_IP + this.n_SR <= 16) {
        if (this.n_IP <= 8 && this.n_SR <= 8) {
          this.n_IP = 8
          this.n_SR = 8
        } else {
          this.n_IP += 16 - this.n_IP - this.n_SR
        }
      } else if (this.n_IP + this.n_SR <= 24) {
        if (this.n_IP <= 8 && this.n_SR <= 16) {
          this.n_IP = 8
          this.n_SR = 16
        } else if (this.n_IP <= 16 && this.n_SR <= 8) {
          this.n_IP = 16
          this.n_SR = 18
        } else {
          this.n_IP += 24 - this.n_IP - this.n_SR
        }
      }
      if (this.n_IP != n_IP || this.n_SR != n_SR) {
        let calcul_IP = n_IP + " → " + this.n_IP
        let calcul_SR = n_SR + " → " + this.n_SR
        this.step3bo = calcul_IP + "<br>" + calcul_SR
      } else {
        this.step3bo = ""
      }

      this.nbIP = Math.pow(2, this.n_IP) - 2
      this.nbSR = Math.pow(2, this.n_SR) - 2
    },
    step4() {
      this.MASK = this.n_R + this.n_SR
      this.step4o = "MASK : " + this.showIP(this.showMask(this.MASK))
    },
    step5() {
      this.step5o = ""
      let step = Math.pow(2, this.n_IP)
      this.SR = new Array(this.nbSR + 1)
      for (let i = 0; i < this.SR.length; i++) {
        if (i == 0) {
          this.SR[i] = this.NET_ID + step
        } else {
          this.SR[i] = this.SR[i - 1] + step
        }
        if (i < this.SR.length - 1) {
          if (i < 9 || i == this.SR.length - 2) {
            if (i > 0) {
              this.step5o += "<br>"
              if (i > 9 && i == this.SR.length - 2) {
                this.step5o += "...<br>"
              }
            }
            this.step5o += this.showIP(this.numberToIp(this.SR[i]))
          }
        }
      }
    },
    step6() {
      this.step6o = []
      for (let i = 0; i < this.SR.length - 1; i++) {
        this.step6o.push([
          this.showIP(this.numberToIp(this.SR[i])),
          this.showIP(this.numberToIp(this.SR[i] + 1)),
          this.showIP(this.numberToIp(this.SR[i + 1] - 2)),
          this.showIP(this.numberToIp(this.SR[i + 1] - 1)),
        ])
      }
    },
    ln(a) {
      return Math.log(a) / Math.log(Math.E)
    },
    showIP(ip) {
      let result = ""
      for (let k = 0; k < ip.length; k++) {
        if (k > 0) {
          result += "."
        }
        result += ip[k]
      }
      return result
    },
    showMask(mask) {
      let result = [0, 0, 0, 0]
      for (let k = 0; k < mask; k++) {
        result[Math.ceil((k + 1) / 8) - 1] += Math.pow(2, 7 - (k % 8))
      }
      return result
    },
    ipToNumber(ip) {
      let number = 0
      for (let k = 0; k < ip.length; k++) {
        number += ip[k] * Math.pow(256, 3 - k)
      }
      return number
    },
    numberToIp(number) {
      let ip = new Array(4)
      for (let k = 0; k < ip.length; k++) {
        let r = number % 256
        number = Math.floor(number / 256)
        ip[3 - k] = r
      }
      return ip
    },
  },
}
</script>

<template>
  <div>
    <table>
      <tr>
        <td>
          <label for="ip">Nombre max de machines (sans le routeur) :</label>
        </td>
        <td>
          <input
            type="number"
            class="border border-gray-500 rounded-sm"
            v-model="nbIPstr"
          />
        </td>
      </tr>
      <tr>
        <td><label for="sr">Nombre max de sous-réseaux :</label></td>
        <td>
          <input
            type="number"
            class="border border-gray-500 rounded-sm"
            v-model="nbSRstr"
          />
        </td>
      </tr>
      <tr>
        <td />
        <td class="text-center">
          <button
            type="button"
            class="px-2 py-1 bg-gray-200 rounded"
            @click="calculate()"
          >
            Calculer
          </button>
        </td>
      </tr>
    </table>

    <h2>1) Déterminer les besoins (inclure les réserves)</h2>
    <p v-html="step1o_ip"></p>
    <p v-html="step1o_sr"></p>
    <h2>
      2) Calculer et réserver le nombre de bits nécessaires (Host_ID et
      Subnet_ID)
    </h2>
    <p v-html="step2o_ip"></p>
    <p v-html="step2o_sr"></p>
    <h2>3) Définir la classe et le Net_ID</h2>
    <p v-html="step3o_classe"></p>
    <p v-html="step3o_net_id"></p>
    <p v-html="step3bo"></p>
    <h2>4) Déterminer le masque (réseau et sous-réseau)</h2>
    <p v-html="step4o"></p>
    <h2>5) Calculer les adresses de chaque sous-réseau</h2>
    <p v-html="step5o"></p>
    <h2>6) Réaliser l'annuaire</h2>
    <table class="!w-full !table">
      <tr class="text-left">
        <th>Adresse du sous-réseau</th>
        <th>Première adresse IP</th>
        <th>Dernière adresse IP</th>
        <th>Adresse de diffusion</th>
      </tr>
      <tr v-for="sr of step6o" :key="sr">
        <td>{{ sr[0] }}</td>
        <td>{{ sr[1] }}</td>
        <td>{{ sr[2] }}</td>
        <td>{{ sr[3] }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
td {
  @apply border-none;
}
</style>
