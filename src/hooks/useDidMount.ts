import { useCallback, useEffect, useRef } from 'react'

export default () => {
    // chack if component is mounted and if so send true else false
    const isMounted = useRef(false)
    useEffect(() => {
        isMounted.current = true
        return () => {
            isMounted.current = false
        }
    }, [])
    const didMount = useCallback(() => {
        if (isMounted.current) {
            return true
        }
        return false
    }, [])
    return didMount
}
