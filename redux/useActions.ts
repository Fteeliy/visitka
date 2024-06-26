import { useAppDispatch } from "@/hooks/rtk"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { serveSliceActions } from "./serve/serve.slice"
import { modalSliceActions } from "./modal/modal.slice"
import { headerSliceActions } from "./header/header.slice"
import { slideSliceActions } from "./slide/slide.slice"

export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators({
    ...modalSliceActions,
    ...headerSliceActions,
    ...serveSliceActions,
    ...slideSliceActions,
  }, dispatch), [dispatch])
}