export default {
  unitmap: {
    href: ""
  },
  accessor: (x) => x.properties,
  units: [
    { id: 0,
      properties: {
        floor: 1
      }
    },
    { id: 1,
      properties: {
        floor: 2
      }
    }
  ],
  show: {
    keys: {
      floor: "Floor"
    },
    values: {
      floor: {
        '1': "One"
      }
    }
  }
}
