import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteActivity, postActivity, putActivity } from "../actions";

export const useForm = (initialForm, postActive, putActive, deleteActive) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  //Validaciones formulario
  const validateForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/; //acepta letras y espacios, caracteres ajenos al ingles como la ñ

    if (!form.name.trim()) {
      errors.name = "The 'name' is required";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "The name only accepts letters and blanks";
    }
    if (!form.duration) {
      errors.duration = "The 'duration' of the activity is required";
    } else if (isNaN(form.duration)) {
      errors.duration = "The duration must be a number";
    }

    if (!form.difficulty) {
      errors.difficulty = "The 'difficulty' of the activity is required";
    } else if (form.difficulty < 1 || form.difficulty > 5) {
      errors.difficulty = "The 'difficulty' must be a value between 1 and 5";
    }

    if (!form.season) {
      errors.season = "The 'season' is required";
    }

    if (form.countries.length === 0) {
      errors.countries = "At least one country is required";
    }

    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };

  const handleChangeList = (e) => {
    let searchCountry = form.countries.find(
      (element) => element === e.target.value
    );
    if (!searchCountry && e.target.value !== "") {
      setForm({
        ...form,
        [e.target.name]: [...form.countries, e.target.value],
      });
      setErrors(
        validateForm({
          ...form,
          [e.target.name]: [...form.countries, e.target.value],
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (postActive) {
      dispatch(postActivity(form));
    }
    if (putActive) {
      dispatch(putActivity(form));
    }
    if (deleteActive) {
      // eslint-disable-next-line no-restricted-globals
      let msg = confirm(
        `The activity "${form.name}" wil removed. Are you sure?`
      );
      if (msg) {
        dispatch(deleteActivity(form));
      }
    }
    handleReset();
  };

  const handleReset = () => {
    setForm({
      id: "",
      name: "",
      duration: "",
      difficulty: "",
      season: "",
      countries: [],
    });
  };

  //Seccion "countries" en el formulario
  const handleDelete = (country) => {
    setForm({
      ...form,
      countries: form.countries.filter((c) => c !== country),
    });
  };

  //Envio formulario
  const sendData = (data) => {
    const { name, duration, season, difficulty, id, countries } = data;
    let nameCountries = countries.map((e) => e.name);

    setForm({
      ...form,
      name: name,
      duration: duration,
      season: season,
      difficulty: difficulty,
      countries: nameCountries,
      id: id,
    });
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleDelete,
    handleChangeList,
    sendData,
  };
};
