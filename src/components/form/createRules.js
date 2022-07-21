const createRules = (data) => {
  data.forEach((item) => {
    let rulesArray = [];
    if (item.required) {
      const rule = {
        required: true,
        message: item.message || createMessage(item),
      };
      rulesArray.push(rule);
    }

    // 判断是否有额外的校验规则
    if (item.rules && Array.isArray(item.rules) && item.rules.length > 0) {
      rulesArray = rulesArray.concat(item.rules);
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
