<template>
  <div>
    <h2>Câble paire torsadée</h2>
    <table>
      <tr>
        <td>UTP</td>
        <td>Unshielded twisted pair</td>
        <td>Paire torsadée non blindée</td>
        <td>
          La paire torsadée non blindée n'est entourée d'aucun blindage
          protecteur.
        </td>
      </tr>
      <tr>
        <td>FTP</td>
        <td>Foiled twisted pair</td>
        <td>Paire torsadée écrantée</td>
        <td>
          L'ensemble des paires torsadées a un blindage global assuré par une
          feuille d'aluminium. L'écran est disposé entre la gaine extérieure et
          les 4 paires torsadées. Les paires torsadées ne sont pas
          individuellement blindées.
        </td>
      </tr>
      <tr>
        <td>STP</td>
        <td>Shielded twisted pair</td>
        <td>Paire torsadée blindée</td>
        <td>
          Chaque paire torsadée blindée est entourée d'un feuillard en
          aluminium, de façon similaire à un câble coaxial.
        </td>
      </tr>
      <tr>
        <td>FFTP</td>
        <td>Foiled foiled twisted pair</td>
        <td>Paire torsadée doublement écrantée</td>
        <td>
          Chaque paire torsadée est entourée d'une feuille de blindage en
          aluminium. L'ensemble des paires torsadées a une feuille de blindage
          collectif en aluminium.
        </td>
      </tr>
      <tr>
        <td>SFTP</td>
        <td>Shielded foiled twisted pair</td>
        <td>Paire torsadée écrantée et blindée</td>
        <td>
          Câble doté d'un double écran (feuille métallisée et tresse) commun à
          l'ensemble des paires. Les paires torsadées ne sont pas
          individuellement blindées (contrairement à ce que le terme
          <i>Shielded foiled twisted pair</i> pourrait faire croire).
        </td>
      </tr>
      <tr>
        <td>SSTP</td>
        <td>Super Shielded Twisted Pair</td>
        <td>Paire torsadée super blindée</td>
        <td>
          Chacune des paires est blindée par un écran en aluminium, et de plus,
          la gaine extérieure est blindée par une tresse en cuivre étamé.
        </td>
      </tr>
    </table>

    <h2>Connecteur RJ-45</h2>
    <p>
      Ne pas confondre le connecteur (RJ-45) avec le câble (paire torsadée) →
      les câbles RJ-45 n'existent pas !
    </p>
    <div class="grid grid-cols-2">
      <div>
        <strong>Câblage droit :</strong>
        <img
          src="/network/medias/RJ-45_droit.png"
          alt="Câblage droit"
          class="border border-black"
        />
      </div>
      <div>
        <strong>Câblage croisé :</strong>
        <img
          src="/network/medias/RJ-45_croise.png"
          alt="Câblage croisé"
          class="border border-black"
        />
      </div>
    </div>

    <h2>Fibre optique</h2>
    <div class="grid grid-cols-2 gap-px">
      <div>
        <img
          src="/network/medias/fibre_optique_schema.png"
          alt="Schéma fibre optique"
        />
      </div>
      <div>
        <img
          src="/network/medias/fibre_optique_comp.png"
          alt="Comparaison fibre optique"
        />
      </div>
    </div>
  </div>
</template>
