import RemoveDuplicates from './RemoveDuplicates';

function groupOptionValues(acc, selectedOptions, i) {
  selectedOptions.forEach(({ name, value }) => {
    let optionIndex = acc.findIndex(option => option.name === name);

    if (!~optionIndex) {
      acc.push({
        name,
        values: []
      });

      optionIndex = acc.length - 1;
    }

    acc[optionIndex].values.push(value);
  });

  return acc;

}

const VariantsToOptions = (variants) => {
  let options = [...variants.map(({ selectedOptions }) => selectedOptions)].reduce(groupOptionValues, []);
  options.forEach((option, index) => {
    options[index].values = option.values.filter(RemoveDuplicates)
  });

  return options;
}

export default VariantsToOptions;