export const getModuleFullName = (meta) =>
  `${meta.cie ? "CIE" : "Module"} ${meta.numero} : ${meta.shortName}`
