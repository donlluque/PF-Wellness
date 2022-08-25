import React from "react";
import { FormGroup, Input } from "reactstrap";
import { useState } from "react";
import { Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function UploadImages(props) {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const picture = useSelector((state) => state.user.picture);

  console.log(picture, "soy una foto");

  const UploadI = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Wellness");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtbkiy2fk/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(res);
    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div>
      <FormGroup>
        <Input
          name="file"
          type="file"
          placeholder="Sube tu imagen aquí"
          onChange={UploadI}
        />
        {loading ? (
          <h3>Cargando imagen...</h3>
        ) : (
          <Image
            borderRadius="full"
            boxSize="150px"
            src={image}
            fallbackSrc={picture}
          />
        )}
      </FormGroup>
    </div>
  );
}

export default UploadImages;
