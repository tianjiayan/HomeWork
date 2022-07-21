const createRules = (data) => {
  data.forEach((item) => {
    const rulesArray = [];
    if (item.required) {
      const rule = {
        required: true,
        message: item.message || createMessage(item),
      };
      rulesArray.push(rule);
    }
    item.rules = rulesArray;
  });
  return data;
};

const createMessage = (data) => {
  let msg = "";
  switch (data.type) {
    case "input":
      msg = "请输入";
      break;
    case "select":
      msg = "请选择";
      break;
  }
  return `${msg}${data.label}`;
};

export default createRules;
