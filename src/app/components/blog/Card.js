"use client";
import * as React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { apiUrl } from '../../_utils/api';

function MediaCard({ loading, blogData }) {
    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                    ) : (
                        <Avatar alt={blogData.pagename} src={`${apiUrl}images/${blogData.image}`} />
                    )
                }
                title={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                    ) : (
                        blogData.pagename
                    )
                }
                subheader={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        new Date(blogData.added_date).toLocaleString('en-IN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                    )
                }
            />
            {loading ? (
                <Skeleton sx={{ height: 194 }} animation="wave" variant="rectangular" />
            ) : (
                <CardMedia
                    component="img"
                    height="194"
                    image={`${apiUrl}images/${blogData.image}`}
                    alt={blogData.pagename}
                />
            )}
            <CardContent>
                {loading ? (
                    <>
                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={10} width="80%" />
                    </>
                ) : (
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {blogData.pagename}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}

MediaCard.propTypes = {
    loading: PropTypes.bool,
    blogData: PropTypes.object.isRequired,
};

export default function BlogList({ bloglist }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="row">
            <Link to={`/blog/${blog.urlname}`}>
                <MediaCard loading={loading} blogData={blog} />
            </Link>


        </div>
    );
}
