import React from 'react'

import styled from '@emotion/styled'
import { List } from 'immutable'
import { WidgetPreviewContainer } from 'netlify-cms-ui-default'
import PropTypes from 'prop-types'

const FileLink = styled(({ href, path }) => (
    <a href={href} rel="noopener noreferrer" target="_blank">
        {path}
    </a>
))`
    display: block;
`

function FileLinkList({ values, getAsset, field }) {
    return (
        <div>
            {values.map((value) => (
                <FileLink
                    key={value}
                    path={value}
                    href={getAsset(value, field)}
                />
            ))}
        </div>
    )
}

function FileContent(props) {
    const { value, getAsset, field } = props
    if (Array.isArray(value) || List.isList(value)) {
        return <FileLinkList values={value} getAsset={getAsset} field={field} />
    }
    return <FileLink key={value} path={value} href={getAsset(value, field)} />
}

const FilePreview = (props) => (
    <WidgetPreviewContainer>
        {props.value ? <FileContent {...props} /> : null}
    </WidgetPreviewContainer>
)

FilePreview.propTypes = {
    getAsset: PropTypes.func.isRequired,
    value: PropTypes.node,
}

export default FilePreview
