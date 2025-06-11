"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTitle, DialogFooter, DialogHeader } from './ui/dialog'
import $axios from '@/lib/axios.instance'

const Logout = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await $axios.post("/api/auth/logout")
      router.push('/auth/login') // Redirect to login page
    } catch (error) {
      console.error('Logout failed', error)
    }
  }

  return (
    <div>
      {/* Logout button */}
      <Button variant="ghost" size="sm" onClick={() => setIsDialogOpen(true)}>Logout</Button>

      {/* Logout Confirmation Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
          </DialogHeader>
          <p>Do you really want to log out?</p>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
              No
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              Yes, Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Logout
