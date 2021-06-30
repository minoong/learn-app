import imageCompression from "browser-image-compression";
import React, { useState } from "react";
import styled from "styled-components";
import ImagePicker from "antd-mobile/lib/image-picker";
import { Button } from "antd";
import "antd-mobile/dist/antd-mobile.css";
import { useEffect } from "react";

const ChangeNameAvatarBlock = styled.div``;

type DataProps = {
  avatar: any[];
};

interface Options {
  /** @default Number.POSITIVE_INFINITY */
  maxSizeMB?: number;
  /** @default undefined */
  maxWidthOrHeight?: number;
  /** @default false */
  useWebWorker?: boolean;
  /** @default 10 */
  maxIteration?: number;
  /** Default to be the exif orientation from the image file */
  exifOrientation?: number;
  /** A function takes one progress argument (progress from 0 to 100) */
  onProgress?: (progress: number) => void;
  /** Default to be the original mime type from the image file */
  fileType?: string;
  /** @default 1.0 */
  initialQuality?: number;
}

const ChangeNameAvatar: React.FC = () => {
  const [data, setData] = useState<DataProps>({
    avatar: [],
  });

  const onClickImageUpload = (files: any[], type: any, index: any) => {
    console.log(files, type, index);
    setData({
      ...data,
      avatar: files,
    });
  };

  useEffect(() => {
    console.log(data);

    if (data.avatar.length === 2) {
      document
        .querySelector(".am-flexbox-item")
        ?.setAttribute("display", "none");
    } else {
      document.querySelector(".am-flexbox-item")?.setAttribute("display", "");
    }
  }, [data]);

  const actionImageCompress = async (fileSrc: File) => {
    console.log("압축 시작...");

    const options: Options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1902,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(fileSrc, options);

      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        const base64data = reader.result;

        console.log(reader);
      };
    } catch (error) {
      console.log(error);
    }
  };

  const test = (...test: any[]) => console.log(test);

  const onSubmit = async () => {
    actionImageCompress(data.avatar[0].file);
  };

  return (
    <ChangeNameAvatarBlock>
      <ImagePicker
        className="zzzzzzzzzzzzzzzzzzzz"
        files={data.avatar}
        onAddImageClick={test}
        onChange={onClickImageUpload}
        onImageClick={(index, fs) => console.log(index, fs, "zzzzzzzzzzzzzz")}
        onFail={(...test: any[]) => console.log(test)}
        accept="image/gif,image/jpeg,image/jpg,image/png"
        length="2"
      />
      <Button type="primary" block onClick={onSubmit}>
        저장하기
      </Button>
    </ChangeNameAvatarBlock>
  );
};

export default ChangeNameAvatar;
