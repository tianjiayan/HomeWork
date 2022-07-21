const createRules = (data) => {
  data.forEach((item) => {
    const rulesArray = [];
    if (item.required) {
      const rule = { required: true, message: "必填" };
      rulesArray.push(rule);
    }
    item.rules = rulesArray;
  });

  return data;
};

export default createRules;
