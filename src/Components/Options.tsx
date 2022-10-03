const LocationOption = [
    {
        value: "",
        label: "-- Select Location --",
    },
    {
        value: "Hanoi",
        label: "Hanoi",
    },
    {
        value: "Ho Chi Minh",
        label: "Ho Chi Minh",
    },
    {
        value: "Vinh Yen",
        label: "Vinh Phuc",
    }
];

const selectLocation: any = LocationOption.map((location) => (
    <option value={location.value}>{location.label}</option>
));

const ModelOption = [
    {
        value: "",
        label: "-- Select Model --",
    },
    {
        value: "lookup",
        label: "Lookup Mode",
    },
    {
        value: "regression",
        label: "Regression Mode",
    }
];

const selectModel: any = ModelOption.map((model) => (
    <option value={model.value}>{model.label}</option>
));

const ageOption = [

];

for (let i = 0; i < 8; ++i) {
    ageOption.push({
        value: i.toString(),
        label: i.toString(),
    });
}

const selectAge: any = ageOption.map((age) => (
    <option value={age.value}>{age.label}</option>
));

export { selectLocation, selectModel, selectAge };