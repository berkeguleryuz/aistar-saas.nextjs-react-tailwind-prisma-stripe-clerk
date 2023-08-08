"use client"
import React, { useEffect } from 'react'

import { Crisp } from "crisp-sdk-web";

type Props = {}

const CrispChat = (props: Props) => {
    useEffect(() => {
        Crisp.configure("ea45cb7f-085c-46d7-9303-2f5f7b2ac8ee")
    }, [])
  return null;
}

export default CrispChat